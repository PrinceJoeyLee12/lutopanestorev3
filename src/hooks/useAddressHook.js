import { useState, useEffect, useRef } from 'react';
import * as Yup from 'yup';
import { regions, provinces as states, cities, barangays } from 'select-philippines-address';
import { countries } from 'constants/index';

import useIsMountedRef from 'hooks/useIsMountedRef';

export const useAddressInitialLoadHook = ({ address = null, watch, setValue }) => {
  const [loading, setLoading] = useState(true);

  const {
    setCityList,
    setStateList,
    setBarangayList, ...formHookRest } = useAddressFormHook({ watch, setValue})

  const initialState = {
    country: address?.country || 'Philippines',
    region: address?.region || '',
    regionCode: address?.regionCode || '',
    addressLine1: address?.addressLine1 || '',
    state: address?.state || '',
    stateCode: address?.stateCode || '',
    barangay: address?.barangay || '',
    barangayCode: address?.barangayCode || '',
    city: address?.city || '',
    cityCode: address?.cityCode || '',
  };
  const [constructedAddress, setConstructedAddress] = useState(initialState);

  useEffect(() => {
    if (address?.region && address?.country === 'Philippines') {
      // let addressData = initialState
      setLoading(true);
      (async () => {
        await regions().then(async (response) => {
          const region = response?.find((region) => region?.region_name === address?.region);
          const regionName = region?.region_name;
          const regionCode = region?.region_code;
          if (regionCode) {
            setConstructedAddress((prev) => ({
              ...prev,
              region: regionName,
              regionCode,
            }));

            await states(regionCode)?.then(async (stateResponse) => {
              const state = stateResponse?.find((state) => state?.province_name === address?.state);
              const stateName = state?.province_name || '';
              const stateCode = state?.province_code || '';
              if (stateCode) {
                setConstructedAddress((prev) => ({
                  ...prev,
                  stateCode,
                  state: stateName,
                }));

                await cities(stateCode)?.then(async (cityResponse) => {
                  const city = cityResponse?.find((city) => city?.city_name === address?.city);
                  const cityName = city?.city_name || '';
                  const cityCode = city?.city_code || '';

                  if (cityCode) {
                    setConstructedAddress((prev) => ({
                      ...prev,
                      cityCode,
                      city: cityName,
                    }));

                    await barangays(cityCode)?.then((barangayResponse) => {
                      const barangay = barangayResponse?.find((barangay) => barangay?.brgy_name === address?.barangay);
                      const barangayName = barangay?.brgy_name || '';
                      const barangayCode = barangay?.brgy_code || '';

                      if (barangayCode) {
                        setConstructedAddress((prev) => ({
                          ...prev,
                          barangayCode,
                          barangay: barangayName,
                          addressLine1: address?.addressLine1,
                        }));
                      }
                    });
                  }
                });
              }
            });
          }
        });
        setLoading(false);
      })();
    } else {
      setLoading(false);
    }
  }, [address]);

  return {
    loading,
    address: constructedAddress || {},
    
    ...formHookRest,

    setCityList,
    setStateList,
    setBarangayList,
  };
};

export const useAddressFormHook = ({ watch, setValue }) => {
  const isMountedRef = useIsMountedRef();

  const [countryIsPhil, setCountryIsPhil] = useState(true);
  const [countryCodePhoneCode, setCountryCodePhoneCode] = useState('');

  const regList = useRef([]);
  const [cityList, setCityList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [barangayList, setBarangayList] = useState([]);

  const watchCountry = watch('country');

  // Country Change
  useEffect(() => {
    setCountryCodePhoneCode(countries.find((val) => val.label === watchCountry)?.phone || '');
    setCountryIsPhil(Boolean(watchCountry === 'Philippines'));
  }, [watchCountry]);

  useEffect(() => {
    if (countryIsPhil && isMountedRef.current) {
      (async () => {
        await regions().then(async (response) => {
          regList.current = response;
        });
      })();
    }
  }, [countryIsPhil, isMountedRef]);

  // Change Watch
  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      const isTypeChange = type === 'change';
      const isRegionChange = isTypeChange && name === 'region';
      const isStateChanges = isTypeChange && name === 'state';
      const isCityChanges = isTypeChange && name === 'city';
      const isBarangayChanges = isTypeChange && name === 'barangay';

      const code = regList.current.find((item) => item.region_name === value?.region)?.region_code;
      if (code && isRegionChange) {
        setValue('regionCode', code);
        setValue('stateCode', '');
        setValue('state', '');
        setValue('cityCode', '');
        setValue('city', '');
        setValue('barangayCode', '');
        setValue('barangay', '');
        setValue('addressLine1', '');
        states(code).then((stateList) => {
          setStateList(stateList);
        });
        setCityList([]);
        setBarangayList([]);
      } else if (isStateChanges) {
        const code = stateList.find((item) => item.province_name === value?.state)?.province_code;
        if (code) {
          setValue('stateCode', code);
          setValue('cityCode', '');
          setValue('city', '');
          setValue('barangayCode', '');
          setValue('barangay', '');
          setValue('addressLine1', '');
          cities(code).then((cityList) => {
            setCityList(cityList);
          });
          setBarangayList([]);
        }
      } else if (isCityChanges) {
        const code = cityList.find((item) => item.city_name === value?.city)?.city_code;
        if (code) {
          setValue('cityCode', code);
          setValue('barangayCode', '');
          setValue('barangay', '');
          setValue('addressLine1', '');
          barangays(code).then((barangayList) => {
            setBarangayList(barangayList);
          });
        }
      } else if (isBarangayChanges) {
        const code = barangayList.find((item) => item.brgy_name === value?.barangay)?.brgy_code;
        if (code) {
          setValue('barangayCode', code);
          setValue('addressLine1', '');
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [setBarangayList, setValue, setCityList, regList, barangayList, cityList, stateList, setStateList]);

  return {
    regList,
    barangayList,
    cityList,
    stateList,
    countryCodePhoneCode,
    countryIsPhil,
    watchCountry,

    setCityList,
    setStateList,
    setBarangayList,
  };
};

export const addressDefaultValues = {
  country: 'Philippines',
  regionCode: '',
  region: '',
  stateCode: '',
  state: '',
  cityCode: '',
  city: '',
  barangayCode: '',
  barangay: '',
  addressLine1: '',
  landMark: '',
};

export const yupOnDefaultAddressValue = {
  country: Yup.string().required('This field is required'),
  regionCode: Yup.string().required('This field is required'),
  region: Yup.string().required('This field is required'),
  stateCode: Yup.string().required('This field is required'),
  state: Yup.string().required('This field is required'),
  cityCode: Yup.string().required('This field is required'),
  city: Yup.string().required('This field is required'),
  barangayCode: Yup.string().required('This field is required'),
  barangay: Yup.string().required('This field is required'),
  addressLine1: Yup.string().required('This field is required'),
  landMark: '',
};

export const defaultLutopanValues = {
  country: 'Philippines',
  regionCode: '07',
  region: 'Region VII (Central Visayas)',
  stateCode: '0722',
  state: 'Cebu',
  cityCode: '072251',
  city: 'Toledo City',
  barangayCode: '072251016',
};
