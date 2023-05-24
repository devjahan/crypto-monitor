import { useState } from 'react';
import { Select } from '@chakra-ui/react';

const DropDown = ({ options, onOptionChanged, placeholder, id }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        onOptionChanged(selectedValue);
    };

    return (
        <Select id={id} placeholder={placeholder} value={selectedOption} onChange={handleOptionChange}>
            {options?.map((item, index) => (
                <option value={item.symbol} key={index}>
                    {item.symbol}
                </option>
            ))}
        </Select>
    );
};

export default DropDown;