import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { FaAngleDown, FaPlus, FaTimes } from "react-icons/fa";
import useScreenType from "../../customHooks/useScreenType";
import useWindowSize from "../../customHooks/useWindowSize";
import { ThemeStoreInstance } from "../../store/ThemeStore";

const AddProduct = observer(() => {
  const theme = ThemeStoreInstance.theme[ThemeStoreInstance.selected];
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    " Select a Category"
  );
  const options = ["Cushion Cover", "T-shirt", "Pants", "Bag", "Phone Cover"];

  const handleSubmit = (e) => {
    console.log("Submitted");
    e.preventDefault();
  };

  const handleDiscard = (e) => {
    console.log("Discarded");
    e.preventDefault();
  };

  const changeSelectedCategory = (cat) => {
    setShowDropDown(false);
    setSelectedCategory(cat);
  };
  const dropDownOptions = options.map((inst, ind) => {
    return (
      <div
        key={ind}
        onClick={() => {
          changeSelectedCategory(inst);
        }}
        className="px-8 my-1 cursor-pointer font-medium"
        style={{ color: theme.textColor }}
      >
        {inst}
      </div>
    );
  }, []);

  return (
    <div
      className="w-full h-full z-0 rounded-xl grid grid-cols-3 grid-rows-3 p-9"
      style={{ backgroundColor: theme.color2 }}
    >
      <div className="col-span-1 row-span-2 flex flex-col justify-center items-center gap-2">
        <div
          className="w-80 h-80 z-10 gap-3 flex flex-col items-center p-2 rounded-lg"
          style={{ backgroundColor: theme.color3 }}
        >
          <div className=" text-xl w-full z-10 text-red-800">
            <FaTimes />
          </div>
          <div>
            <p> Product Images</p>
          </div>
        </div>
        <div className="w-full h-24 flex justify-center items-center gap-2">
          <div className="w-16 h-16 bg-green-300 rounded-lg"></div>
          <div className="w-16 h-16 bg-green-300 rounded-lg"></div>
          <div className="w-16 h-16 bg-green-300 rounded-lg"></div>
          <div className="w-16 h-16 bg-green-300 rounded-lg"></div>
          <div className=" flex justify-center items-center z-10 ">
            <div className="p-2 rounded-full z-10 bg-green-300 text-red-800">
              <FaPlus />
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-2 row-span-3 bg-green-300">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="w-full h-full flex flex-col justify-center items-center gap-3"
        >
          <input
            type="text"
            className="h-12 w-52 rounded-lg text-center text-lg"
            placeholder="Product Title"
            style={{ backgroundColor: theme.color1 }}
          />

          <div
            className="cursor-pointer flex flex-row justify-center items-center gap-3 py-2 px-4 rounded-md text-medium"
            style={{ color: theme.textColor, backgroundColor: theme.color1 }}
            onClick={() => {
              setShowDropDown(!showDropDown);
            }}
          >
            {selectedCategory}
            <FaAngleDown />
          </div>
          <div
            className={`absolute z-10 w-2/12 bg-red-200 py-3 px-10 duration-200 rounded-md ${
              showDropDown ? "opacity-1" : "opacity-0 pointer-events-none"
            } `}
          >
            {dropDownOptions}
          </div>

          <textarea
            className="rounded-lg text-center text-lg"
            placeholder="Product Description"
            style={{ backgroundColor: theme.color1 }}
            cols="50"
            rows="10"
          ></textarea>
        </form>
      </div>
      <div className="col-span-1 row-span-1 flex flex-col justify-center items-center gap-3">
        <div
          className="bg-red-300 hover:bg-red-400 rounded-lg py-3 px-6 font-medium cursor-pointer"
          style={{ color: theme.textColor }}
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Add Product
        </div>
        <div
          className="bg-red-300 hover:bg-red-400 rounded-lg py-3 px-6 font-medium cursor-pointer"
          style={{ color: theme.textColor }}
          onClick={(e) => {
            handleDiscard(e);
          }}
        >
          Discard changes
        </div>
      </div>
    </div>
  );
});

export default AddProduct;
