'use client';

import React, { useState } from 'react';
import {
  StyledSelectFieldContainer,
  StyledSelectFieldList,
  StyledSelectFieldListItem,
  StyledSelectFieldToggle,
} from './SelectField.styled';
import { FiCheck, FiChevronDown } from 'react-icons/fi';
import { ComponentProps } from './SelectField.types';

// const dummy: ListProps[] = [
//   {
//     title: 'John Doe',
//     value: 'John Doe',
//     icon: <FiUser />,
//   },
//   {
//     title: 'Jane Doe',
//     value: 'Jane Doe',
//     icon: <FiUserPlus />,
//   },
// ];

const SelectField: React.FC<ComponentProps> = ({
  id,
  fontSize,
  placeholder,
  state,
  list,
  toggleStyles,
}) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  // const [selectedOption, setSelectedOption] = useState<null | string>(null);
  // const [selectedIcon, setSelectedIcon] = useState<any>(null);

  // const newToggleStyles = {
  //   ...toggleStyles,
  //   borderColor: 'red',
  //   borderRadius: '30px',
  // };

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>, icon?: any) => {
    state?.setSelectedOption(e.target.value);
    state?.setSelectedIcon && state?.setSelectedIcon(icon);
  };

  return (
    <StyledSelectFieldContainer>
      {/* <StyledSelectFieldToggle {...toggleStyles}> */}
      <StyledSelectFieldToggle {...toggleStyles} fontSize={fontSize}>
        <input
          type="checkbox"
          name={id}
          id={id}
          checked={dropdownActive}
          onChange={(e) => setDropdownActive(e.target.checked)}
        />
        <label htmlFor={id}>
          <div className="toggle-left">
            {state?.selectedIcon && (
              <div className="icon">{state?.selectedIcon}</div>
            )}
            {!state?.selectedOption && <span>{placeholder}</span>}
            {state?.selectedOption && <span>{state?.selectedOption}</span>}
          </div>

          <div className="chevron">
            <FiChevronDown />
          </div>
        </label>
      </StyledSelectFieldToggle>

      <StyledSelectFieldList active={dropdownActive} fontSize={fontSize}>
        {list?.map((item, index) => (
          <StyledSelectFieldListItem
            onClick={() => setDropdownActive(false)}
            key={index}
          >
            <input
              type="radio"
              name="data"
              value={item.value}
              id={item.value}
              checked={state?.selectedOption === item.value}
              //   onChange={(e) => setSelectedOption(e.target.value)}
              onChange={(e) => handleSelect(e, item.icon)}
            />
            <label htmlFor={item.value}>
              <div className="item-left">
                {item.icon && <div className="icon">{item.icon}</div>}
                <span>{item.title}</span>
              </div>

              <div className="check">
                <FiCheck />
              </div>
            </label>
          </StyledSelectFieldListItem>
        ))}
      </StyledSelectFieldList>
    </StyledSelectFieldContainer>
  );
};

export default SelectField;
