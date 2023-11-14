import { List } from "@raycast/api";
import { Category } from "../config";

interface Props {
  categories: Category[];
  onCategoryChange: (value: string) => void;
}

export const CategoryDropdown = ({ categories, onCategoryChange }: Props) => {
  return (
    <List.Dropdown tooltip="Select a category..." onChange={onCategoryChange} storeValue>
      {categories.map((category) => (
        <List.Dropdown.Item key={category.endpoint} title={category.title} value={category.endpoint} />
      ))}
    </List.Dropdown>
  );
};
