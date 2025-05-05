import { ImageView, Logo } from "@/components/common";
import { SearchForm } from "./search-form/SearchForm";

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
          <Logo />
        </div>
        <SearchForm />

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
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <ImageView
                  src={"/assetss/photo/7 Support Center.png"}
                  alt="support-ImageView"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </nav>
      </nav>
    </header>
  );
}
