// import React, { useState } from 'react';
// import {
//   StyledSelectFieldContainer,
//   StyledSelectFieldList,
//   StyledSelectFieldListItem,
//   StyledSelectFieldToggle,
// } from './SelectField.styled';
// import { FiChevronDown, FiCheck, FiUser, FiUserPlus } from 'react-icons/fi';

// interface ListProps {
//   title: string;
//   value: string;
//   icon?: any;
// }

// interface Props {
//   icon: {
//     active: boolean;
//     icon: any;
//   };
//   placeholder: string;
//   list: ListProps[];
//   // state: {
//   //   selectedOption: string | null;
//   //   setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>;
//   //   selectedIcon: any;
//   //   setSelectedIcon: React.Dispatch<any>;
//   // };
//   //
//   toggleStyles: {
//     borderRadius?: string;
//     borderColor?: string;
//     borderWidth?: string;
//     borderStyle?: string;
//     background?: string;
//     // padding:
//     boxShadow?: string;
//     focusRing?: {
//       borderColor: string;
//       boxShadowColor: string;
//     };
//   };
//   //
//   // listStyles: {};
//   // listItemStyles: {};
// }

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

// const InputDropdown: React.FC<Props> = ({
//   placeholder,
//   // state,
//   list,
//   toggleStyles,
// }) => {
//   const [dropdownActive, setDropdownActive] = useState(false);
//   const [selectedOption, setSelectedOption] = useState<null | string>(null);
//   const [selectedIcon, setSelectedIcon] = useState<any>(null);

//   // const { selectedOption, setSelectedOption, selectedIcon, setSelectedIcon } =
//   //   state;

//   const handleSelect = (e: React.ChangeEvent<HTMLInputElement>, icon?: any) => {
//     setSelectedOption(e.target.value);
//     setSelectedIcon(icon);
//   };

//   return (
//     <StyledSelectFieldContainer>
//       <StyledSelectFieldToggle {...toggleStyles}>
//         <input
//           type="checkbox"
//           name="checkbox"
//           id="checkbox"
//           checked={dropdownActive}
//           onChange={(e) => setDropdownActive(e.target.checked)}
//         />
//         <label htmlFor="checkbox">
//           <div className="toggle-right">
//             <div className="icon">{selectedIcon}</div>
//             {!selectedOption && <span>{placeholder}</span>}
//             {selectedOption && <span>{selectedOption}</span>}
//           </div>

//           <div className="chevron">
//             <FiChevronDown />
//           </div>
//         </label>
//       </StyledSelectFieldToggle>

//       <StyledSelectFieldList active={dropdownActive}>
//         {dummy?.map((item, index) => (
//           <StyledSelectFieldListItem
//             onClick={() => setDropdownActive(false)}
//             key={index}
//           >
//             <input
//               type="radio"
//               name="data"
//               value={item.value}
//               id={item.value}
//               checked={selectedOption === item.value}
//               //   onChange={(e) => setSelectedOption(e.target.value)}
//               onChange={(e) => handleSelect(e, item.icon)}
//             />
//             <label htmlFor={item.value}>
//               <div className="item-right">
//                 {item.icon && <div className="icon">{item.icon}</div>}
//                 <span>{item.title}</span>
//               </div>

//               <div className="check">
//                 <FiCheck />
//               </div>
//             </label>
//           </StyledSelectFieldListItem>
//         ))}
//       </StyledSelectFieldList>
//     </StyledSelectFieldContainer>
//   );
// };

// export default InputDropdown;

import React, { useState } from 'react';
import {
  StyledSelectFieldContainer,
  StyledSelectFieldList,
  StyledSelectFieldListItem,
  StyledSelectFieldToggle,
} from './SelectField.styled';
import { FiCheck, FiChevronDown } from 'react-icons/fi';

interface ListProps {
  title: string;
  value: string;
  icon?: any;
}

interface Props {
  icon: {
    active: boolean;
    icon: any;
  };
  placeholder: string;
  list: ListProps[];
  state: {
    selectedOption: string | null;
    setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>;
    selectedIcon: any;
    setSelectedIcon: React.Dispatch<any>;
  };
  //
  toggleStyles: {
    borderRadius?: string;
    borderColor?: string;
    borderWidth?: string;
    borderStyle?: string;
    background?: string;
    // padding:
    boxShadow?: string;
    focusRing?: {
      borderColor: string;
      boxShadowColor: string;
    };
  };
  //
  // listStyles: {};
  // listItemStyles: {};
}

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

const SelectField: React.FC<Props> = ({
  placeholder,
  state,
  list,
  toggleStyles,
}) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  // const [selectedOption, setSelectedOption] = useState<null | string>(null);
  // const [selectedIcon, setSelectedIcon] = useState<any>(null);

  const newToggleStyles = {
    ...toggleStyles,
    borderColor: 'red',
    borderRadius: '30px',
  };

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>, icon?: any) => {
    state?.setSelectedOption(e.target.value);
    state?.setSelectedIcon(icon);
  };

  return (
    <StyledSelectFieldContainer>
      {/* <StyledSelectFieldToggle {...toggleStyles}> */}
      <StyledSelectFieldToggle {...newToggleStyles}>
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          checked={dropdownActive}
          onChange={(e) => setDropdownActive(e.target.checked)}
        />
        <label htmlFor="checkbox">
          <div className="toggle-right">
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

      <StyledSelectFieldList active={dropdownActive}>
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
              <div className="item-right">
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
