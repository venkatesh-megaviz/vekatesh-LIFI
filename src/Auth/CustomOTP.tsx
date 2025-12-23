import React, { useMemo } from "react";
const RE_DIGIT = new RegExp(/^\d+$/);

export type Props = {
  value: string;
  valueLength: number;
  onChange: (value: string) => void;
  error:any
};

export default function OtpInputField({ value, valueLength, onChange ,error}: Props) {
  const valueItems = useMemo(() => {
    const valueArray = value.split("");
    const items: Array<string> = [];

    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];

      if (RE_DIGIT.test(char)) {
        items.push(char);
      } else {
        items.push("");
      }
    }

    return items;
  }, [value, valueLength]);

  const focusToNextInputField = (target: HTMLElement) => {
    const nextElementSibling = target.nextElementSibling as HTMLInputElement | null;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };
  const focusToPrevInputField = (target: HTMLElement) => {
    const previousElementSibling = target.previousElementSibling as HTMLInputElement | null;

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };
  const inputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const target = e.target;
    let targetValue = target.value.trim();
    const isTargetValueDigit = RE_DIGIT.test(targetValue);

    if (!isTargetValueDigit && targetValue !== "") {
      return;
    }

    targetValue = isTargetValueDigit ? targetValue : " ";

    const targetValueLength = targetValue.length;

    if (targetValueLength === 1) {
      const newValue =
        value.substring(0, idx) + targetValue + value.substring(idx + 1);

      onChange(newValue);

      if (!isTargetValueDigit) {
        return;
      }

      focusToNextInputField(target);
    } else if (targetValueLength === valueLength) {
      onChange(targetValue);

      target.blur();
    }
  };
  const inputOnKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const target = e.target as HTMLInputElement;
    if (key === "ArrowRight" || key === "ArrowDown") {
      e.preventDefault();
      return focusToNextInputField(target);
    }

    if (key === "ArrowLeft" || key === "ArrowUp") {
      e.preventDefault();
      return focusToPrevInputField(target);
    }

    const targetValue = target.value;
    target.setSelectionRange(0, targetValue.length);

    if (e.key !== "Backspace" || targetValue !== "") {
      return;
    }

    focusToPrevInputField(target);
  };
  const inputOnPaste = (e: any) => {
    const pastedData = e.clipboardData.getData("text/plain");
    onChange(pastedData);
  };
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',alignContent:'center'}}>
      {valueItems.map((digit, idx) => (
        <input
          key={idx}
          type="text"
  
          id={`otp-input-${idx}`}
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="\d{1}"
          maxLength={1}
          style={{
            width: '50px',
            height: '50px',
            margin: '5px',
            borderRadius: '13px',
            fontSize: '20px',
            textAlign: 'center',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
          
            border: `1px solid ${error ? '#d32f2f' : '#156082'}`,
            background: '#F9FAFB'
          }}
          onFocus={(e) => {
            e.target.style.outline = "none";
            e.target.style.border = "2px solid #156082";
          }}
          onBlur={(e) => {
            e.target.style.border = `1px solid ${error ? "#d32f2f" : "#156082"}`;
          }}
          className="otp-input"
          value={digit}
          onChange={(e) => inputOnChange(e, idx)}
          onKeyDown={inputOnKeyDown}
         
          onPaste={inputOnPaste}
        />
      ))}
    </div>
  );
}
