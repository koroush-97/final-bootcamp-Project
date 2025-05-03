import { ImageView } from "@/components/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <header className="w-full h-[800px] pt-4 pb-4">
      <nav className="w-full flex flex-row justify-between pt-2 pb-2 container items-center">
        <div className="flex flex-row">
          <div>
            <ImageView
              src={"/assetss/photo/fruit.png"}
              alt={"logo-fruit"}
              width={78}
              height={64}
            />
          </div>
          <ImageView
            src={"/assetss/photo/Martgroty.png"}
            width={140}
            height={60}
            alt="Martgroty"
          />
        </div>

        <div className="hidden md:flex w-[700px] h-[50px] flex-row items-center">
          <input
            type="search"
            placeholder="search for items ..."
            className="hidden md:block w-full p-4 border-2 border-gray-500 rounded-sm border-r-0"
          />
          <span className="hidden md:block border-2 border-gray-500 rounded-sm p-4 border-l-0">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-gray-200 text-xl"
            />
          </span>
        </div>

        <div>
          <ImageView
            src={"/assetss/photo/menu.png"}
            className={"hamberger flex md:hidden"}
            width={30}
            height={30}
            alt="hamberger-menu"
          />
          <ul className="hidden md:flex flex-row h-full w-[220px] justify-between">
            <li className="w-[100px] flex flex-row items-center">
              <i className="fa-regular fa-user mr-2 text-xl" />
              <span>Account</span>
            </li>
            <li className="w-[100px] flex items-center">
              <i className="fa-solid fa-cart-shopping text-xl mr-2" />
              <span>Cart</span>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="h-[60px] border-t-2 border-b-2 w-full mt-[13px]">
        <nav className="container h-full flex flex-row justify-between items-center">
          <button className="window-btn w-[250px] h-[44px] btn-color rounded-sm text-white-500 hidden md:flex">
            <i className="fa-brands fa-windows mr-2" />
            <p>Export BrowseCategories</p>
          </button>

          <ImageView
            className="md:hidden sm:block"
            width={24}
            height={24}
            src={"/assetss/photo/search-icon.png"}
            alt="search-icon"
          />
          <div className="w-[60px] flex flex-row md:hidden ml-[75%]">
            <ImageView
              width={24}
              height={24}
              src={"/assetss/photo/user.png"}
              alt="user-icon"
            />
            <ImageView
              width={24}
              height={24}
              src={"/assetss/photo/fi-rs-shopping-cart.png"}
              alt="basket"
            />
          </div>

          <ul
            className="hidden md:flex flex-row justify-between"
            style={{ maxWidth: 358, width: "100%" }}
          >
            <li style={{ display: "flex" }}>
              <ImageView
                src={"/assetss/photo/fi-rs-flame 1.png"}
                className="mr-[10px]"
                width={20}
                height={20}
                alt="flame"
              />
              <h6 style={{ cursor: "pointer" }}>Hot Deals</h6>
            </li>
            <li>
              <h6 style={{ cursor: "pointer" }}>Home</h6>
            </li>
            <li>
              <h6 style={{ cursor: "pointer" }}>Vegetable</h6>
            </li>
            <li>
              <h6 style={{ cursor: "pointer" }}>Drink</h6>
            </li>
          </ul>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <ImageView
              className="hidden md:flex"
              src={"/assetss/photo/headset.png"}
              width={36}
              height={36}
              alt="headset-photo"
            />
            <div className="hidden md:block ml-[5px]">
              <div>
                <ImageView
                  src={"/assetss/photo/1900 - 8888.png"}
                  alt="history-activity"
                  width={36}
                  height={36}
                />
              </div>
              <div>
                <ImageView
                  src={"/assetss/photo/7 Support Center.png"}
                  alt="support-ImageView"
                  width={36}
                  height={36}
                />
              </div>
            </div>
          </div>
        </nav>
      </nav>

      <section className="container relative rounded-xl bg-[rgba(253,192,64,0.2)] h-[250px] md:h-[538px] mt-[20px] flex flex-row justify-end md:flex-row p-2 w-full bg-contain">
        <ImageView
          src={"/assetss/photo/bg-fruite-pic.png"}
          alt="background-pic"
          className="absolute z-[0] top-0 bottom-0 left-0 right-0"
          width={36}
          height={36}
        />

        {/* menuDiv */}
        {/* کد مربوط به menuDiv و item‌ها اینجا می‌تونه مثل بالا به JSX تبدیل بشه – اگه خواستی ادامه‌ش هم تمیز کنم بگو */}

        <div className="w-[50%] absolute top-[30px] md:top-0 md:bottom-0 left-0 z-[50] justify-start items-start p-2 flex flex-col text-left md:space-y-10">
          <h1 className="hidden md:block md:text-5xl md:pt-[50px]">
            <span className="whitespace-nowrap">Don’t miss amazing </span>{" "}
            <br />
            grocery deals
          </h1>
          <h6 className="hidden md:block text-4xl">
            Sign up for the daily newsletter
          </h6>

          <div className="flex flex-row md:hidden w-full justify-between">
            <h3 className="text-base sm:text-3xl md:text-7xl pt-[50px]">
              <span className="whitespace-nowrap">Don’t miss amazing </span>
              <br />
              grocery deals
            </h3>
          </div>

          <div className="hidden md:flex w-[442px] h-[50px] relative p-2 bg-white rounded-3xl">
            <input
              className="w-[80%] h-full rounded-l-3xl p-1"
              placeholder="Your email address"
              type="text"
            />
            <button className="w-[20%] h-full rounded-3xl bg-[#3BB77E] text-white flex justify-center items-center pr-[5px] pl-[5px]">
              Subscribe
            </button>
          </div>
        </div>

        <div
          className="relative w-[70%] md:w-[50%]"
          style={{ boxSizing: "border-box" }}
        >
          <ImageView
            src={"/assetss/photo/fruit-bascket.png"}
            className="w-full h-full"
            alt="fruits"
            fill
          />
        </div>
      </section>

      <div className="flex flex-row md:hidden border mr-auto ml-auto mt-[20px] w-[300px] h-[50px] relative p-2 bg-white rounded-3xl">
        <input
          className="w-[70%] h-full rounded-l-3xl p-1"
          placeholder="Your email address"
          type="text"
        />
        <button className="w-[30%] h-full rounded-3xl bg-[#3BB77E] text-white flex justify-center items-center pr-[25px] pl-[25px]">
          Subscribe
        </button>
      </div>
    </header>
  );
}
