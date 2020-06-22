import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";

const Country = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries().then((response) => setCountries(response.data.countries));
  }, [setCountries]);

  return (
    <div>
      <FormControl>
        <NativeSelect>
          <option value="global">Global</option>
          {countries.map((country, i) => (
            <option key={i} value={country.name}>
              {country.name}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default Country;
