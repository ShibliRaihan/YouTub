import { Stack } from "@mui/system";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <>
      <Stack
        sx={{
          overflowY: "auto",
          height: { sx: "auto", md: "95%" },
          flexDirection: { md: "column", xs: "row" },
        }}
      >
        {categories.map((categories) => (
          <button
            className="category-btn"
            style={{
              backgroundColor:
                categories.name === selectedCategory && "#FC1503",
              color: "#ffff",
              borderLeft:
                categories.name === selectedCategory && "5px solid #ffff",
            }}
            onClick={() => {
              setSelectedCategory(categories.name);
            }}
            key={categories.name}
          >
            <span
              style={{
                color:
                  categories.name === selectedCategory ? "#ffff" : "#FC1503",
                marginRight: "15px",
              }}
            >
              {categories.icon}
            </span>
            <span
              style={{
                opacity: categories.name === selectedCategory ? "1" : "0.8",
              }}
            >
              {categories.name}
            </span>
          </button>
        ))}
      </Stack>
    </>
  );
};

export default Sidebar;
