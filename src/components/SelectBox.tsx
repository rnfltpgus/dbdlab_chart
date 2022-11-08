type ChangeEvent = React.ChangeEvent<HTMLSelectElement>;

interface SelectBoxProps {
  itemList: string[];
  selectedItem: string;
  onChange: (event: ChangeEvent) => void;
}

const SelectBox = ({ itemList, selectedItem, onChange }: SelectBoxProps) => {
  return (
    <select onChange={onChange} value={selectedItem}>
      {itemList.map((item) => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};

export default SelectBox;
