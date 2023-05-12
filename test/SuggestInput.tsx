import React, { useRef, useState, useMemo } from 'react';

interface Props {
  value: string;
  onChange: (value: string) => Promise<String[]>;
  onOptionSelect: (value: string) => string;
  container: string
}

function Popover() {

}

function SuggestInput(props: Props) {
  const ref = useRef<HTMLInputElement>();
  const [options, setOptions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>(props.value);
  const onInputChange =  async (e: Event) => {
    // @ts-ignore
    const options = await props.onChange(e.target.value);
    // ref.clienX, clientY + clientHeight
    // 
    setOptions(options || []);
  }

  // key label
  const onOptionClick = (option) => {
    let result = option;
    if (props.onOptionSelect) {
      result = props.onOptionSelect(option);
    }
    setInputValue(result);
  }

  const optionsDom = useMemo(() => {
    if (!options || !options.length) {
      return null;
    }
    return <ul>
      {
        options.map((option: string) => <li onClick={onOptionClick(option)}>option</li> )
      }
    </ul>

  }, options);

  return <div>
    <input ref={ref} value={inputValue} onChange={e => onInputChange(e)} />
    {optionsDom}
  </div>;
}

export default React.forwardFor(SuggestInput);