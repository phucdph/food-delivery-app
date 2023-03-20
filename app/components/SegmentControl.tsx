import React, { useMemo } from "react";
import Box from "./Box";

export interface ISegmentControlValue {
  title: React.ReactNode;
  value: string;
}

interface Props {
  data?: ISegmentControlValue[];
  value?: string;
  onChange?: (v: string) => void;
}

const SegmentControl: React.FC<Props> = (props) => {
  const name = useMemo(() => new Date().valueOf().toString(), []);
  const { data = [], value, onChange } = props;
  return (
    <Box display="flex" flexWrap="wrap">
      {data?.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === data?.length - 1;
        const selected = value === item.value;
        return (
          <React.Fragment key={item.value}>
            <Box
              as="input"
              type="radio"
              name={name}
              id={item.value}
              value={item.value}
              display="none"
            />
            <Box
              userSelect="none"
              cursor="pointer"
              onClick={() => onChange?.(item.value)}
              as="label"
              htmlFor={item.value}
              py="$xs"
              px="$sm"
              fontSize="$sm"
              borderTopWidth="1px"
              borderBottomWidth="1px"
              borderLeftWidth={isFirst ? "1px" : "0.5px"}
              borderRightWidth={isLast ? "1px" : "0.5px"}
              borderTopLeftRadius={isFirst ? "$lg" : "none"}
              borderBottomLeftRadius={isFirst ? "$lg" : "none"}
              borderTopRightRadius={isLast ? "$lg" : "none"}
              borderBottomRightRadius={isLast ? "$lg" : "none"}
              borderStyle="solid"
              borderColor="$yellow600"
              bg={selected ? "$yellow600" : "$white"}
              color={!selected ? "$yellow600" : "$white"}
              transition="ease .2s"
            >
              {item.title}
            </Box>
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default SegmentControl;
