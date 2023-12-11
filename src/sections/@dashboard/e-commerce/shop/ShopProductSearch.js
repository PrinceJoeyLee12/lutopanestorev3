import { useState, useCallback, useEffect } from 'react';
import { paramCase, sentenceCase, capitalCase, noCase } from 'change-case';
import { useSelector, dispatch } from 'redux/store';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { useNavigate } from 'react-router-dom';
import { useDebounceSearch } from 'hooks/useDebounceSearch';
import { searchProducts, getProducts } from 'redux/slices/product/actions';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Typography, Autocomplete, InputAdornment, Popper } from '@mui/material';
// hooks
import useIsMountedRef from '../../../../hooks/useIsMountedRef';
// routes
import { PATH } from '../../../../routes/paths';
// components
import Image from '../../../../components/Image';
import Iconify from '../../../../components/Iconify';
import InputStyle from '../../../../components/InputStyle';
import SearchNotFound from '../../../../components/SearchNotFound';

// ----------------------------------------------------------------------

const PopperStyle = styled((props) => <Popper placement="bottom-start" {...props} />)({
  width: '280px !important',
});

// ----------------------------------------------------------------------

export default function ShopProductSearch() {
  const navigate = useNavigate();

  const { products } = useSelector((state) => state.product);

  const [searchQuery, setSearchQuery] = useState('');

  const [searchResults, setSearchResults] = useState(products);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const [searchMessage, setSearchMessage] = useState('');
  const [headerMessage, setHeaderMessage] = useState('');
  const [searchResultsStorage, setSearchResultsStorage] = useState([]);

  const { debounceSearch, clearTimeoutFunc } = useDebounceSearch();

  useEffect(() => {
    setSearchResultsStorage(searchResults);
  }, [searchResults]);

  useEffect(() => {
    setSearchResults(products);
  }, [products]);

  const searchProductsFunc = useCallback(async (value) => {
    setSearchQuery(value);
    try {
      const filter = {
        name: { contains: capitalCase(value) },
      };
      await dispatch(searchProducts(filter));
      setIsLoading(false);
      setSearchMessage('');
      setHeaderMessage('');
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      setSearchMessage('Should be greater than 3 character');
      setHeaderMessage('Search Error');
    }
  }, []);

  const handleChangeSearch = async (value) => {
    setSearchValue(value);
    try {
      if (value) {
        if (!value || value?.length < 3) {
          setHeaderMessage('Criteria');
          setSearchMessage('Should be greater than 2 character');
        } else {
          setHeaderMessage('Searching...');
          setSearchMessage('Please be patient...');
          setIsLoading(true);
          clearTimeoutFunc();
          debounceSearch(searchProductsFunc, value)();
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (name, slug) => {
    navigate(PATH.eCommerce.view(paramCase(name), paramCase(slug)));
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      if (event.target.value) {
        searchProductsFunc(event.target.value);
      }
    }
  };

  const handleOnBlur = useCallback(async () => {
    await dispatch(getProducts());
  }, [searchValue]);

  return (
    <Autocomplete
      size="small"
      autoHighlight
      popupIcon={null}
      PopperComponent={PopperStyle}
      options={searchResultsStorage}
      onInputChange={(event, value) => handleChangeSearch(value)}
      getOptionLabel={(product) => product.name}
      onBlur={handleOnBlur}
      noOptionsText={<SearchNotFound searchQuery={searchQuery} message={searchMessage} headerMessage={headerMessage} />}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={(params) => (
        <InputStyle
          {...params}
          stretchStart={200}
          placeholder="Search product..."
          onKeyUp={handleKeyUp}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon={'eva:search-fill'} sx={{ ml: 1, width: 20, height: 20, color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
        />
      )}
      renderOption={(props, product, { inputValue }) => {
        const { name, cover, code } = product;
        const matches = match(name, inputValue);
        const parts = parse(name, matches);

        return (
          <span key={code}>
            <li {...props}>
              <Image alt={cover} src={cover} sx={{ width: 48, height: 48, borderRadius: 1, flexShrink: 0, mr: 1.5 }} />
              <Link underline="none" onClick={() => handleClick(name, code)}>
                {parts.map((part, index) => (
                  <Typography
                    key={index}
                    component="span"
                    variant="subtitle2"
                    color={part.highlight ? 'primary' : 'textPrimary'}
                  >
                    {part.text}
                  </Typography>
                ))}
              </Link>
            </li>
            {isLoading && (
              <li {...props}>
                <Iconify icon={'line-md:loading-loop'} color="#1877F2" width={20} height={20} />,
              </li>
            )}
          </span>
        );
      }}
    />
  );
}
