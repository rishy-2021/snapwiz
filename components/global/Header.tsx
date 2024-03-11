"use client";
import {
  Button,
  Drawer,
  Dropdown,
  DropdownProps,
  MenuProps,
  Select,
  Space,
  theme,
} from "antd";
import Link from "next/link";
import { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

const NAV_MENU_LINKS = [
  {
    label: "Businesses",
    path: "/businesses",
  },
  {
    label: "Dating",
    path: "/dating",
  },
  {
    label: "Reviews",
    path: "/riviews",
  },
  {
    label: "Affiliates",
    path: "/affiliates",
  },
];

const items = [
  {
    key: "1",
    label: <Link href={"/student-headshots"}>Student Headshots</Link>,
  },
  {
    key: "2",
    label: <Link href={"/teacher-headshots"}>Teacher Headshots</Link>,
  },
  {
    key: "3",
    label: <Link href={"/doctor-headshots"}>Doctor Headshots</Link>,
  },
  {
    key: "4",
    label: <Link href={"/lawyer-headshots"}>Lawyer Headshots</Link>,
  },
  {
    key: "5",
    label: <Link href={"/salesperson-hadshots"}>Salesperson Headshots</Link>,
  },
  {
    key: "6",
    label: (
      <Link href={"/real-estate-agent-headshots"}>
        Real Estate Agent Headshots
      </Link>
    ),
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    if (e.key === "3") {
      setOpen(false);
    }
  };

  const handleOpenChange: DropdownProps["onOpenChange"] = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setOpen(nextOpen);
    }
  };

  const { Option } = Select;

  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }

  const showDrawer = () => {
    setMenuOpen(true);
  };

  const onClose = () => {
    setMenuOpen(false);
  };

  return (
    <div>
    <div className="sticky top-0 w-full flex flex-row justify-between lg:justify-around items-center py-3 border-b border-slate-300 z-40 md:pr-10 px-3 lg:px-0">
      <p className="text-center text-xl font-semibold w-1/4">Logo.ai</p>
      <div className="hidden lg:flex max-[1150px]:w-1/2 w-1/3 items-center justify-around">
        <Dropdown
          menu={{
            items,
            onClick: handleMenuClick,
          }}
          onOpenChange={handleOpenChange}
          open={open}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
             Headshots
              {!open ? <IoChevronDownOutline /> : <IoChevronUpOutline />}
            </Space>
          </a>
        </Dropdown>
        {NAV_MENU_LINKS.map((link, i) => (
          <Link className="hoverOpacity" href={link.path} key={i}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center lg:w-1/3">
        <Select
          className="hidden lg:block w-auto"
          onChange={handleChange}
          size="small"
          variant="filled"
          defaultValue={"India"}
          popupMatchSelectWidth={false}
        >
          <Option value="jack">Us</Option>
          <Option value="lucy">India</Option>
          <Option value="chine">Chine</Option>
          <Option value="south-korea">South korea</Option>
          <Option value="armenia">Armenia</Option>
        </Select>
        <p className="hidden lg:block text-lg font-semibold mx-3">Login</p>
        <Button
          shape="round"
          size="middle"
          color="black"
          className="bg-black text-white font-semibold"
        >
          Get started
        </Button>
        <Button
          type='text'
          size="large"
          color="black"
          icon={menuOpen
            ?
            <RxCross1 color="black" size={26} />
             :
             <RxHamburgerMenu color="black" size={26} />
             }
          className="sm:block lg:hidden ml-1"
          onClick={()=> setMenuOpen(!menuOpen)}
        />
      </div>
    </div>
    <div className="relative">
    <Drawer
        placement="top"
        closable={false}
        onClose={onClose}
        open={menuOpen}
        getContainer={false}
        height={"auto"}
      >
        <div className="w-full flex flex-col">
        <p className="px-5 mb-2 -mt-3 text-base font-medium">Headshot</p>
        <div className="px-5 pb-3 border-b flex flex-wrap justify-between items-center">
           {items.map((item, idx)=> (
            <p className="mb-2 font-light md:w-1/2" key={idx}>{item?.label}</p>
           ))}
          </div>
        {NAV_MENU_LINKS.map((link, i) => (
          <Link className="px-5 py-4 border-b text-base font-medium" href={link.path} key={i}>
            {link.label}
          </Link>
        ))}
        <div className="px-4 pt-4">
        <Select
          className="w-auto"
          onChange={handleChange}
          size="middle"
          variant='outlined'
          defaultValue={"India"}
          popupMatchSelectWidth={false}
        >
          <Option value="jack">Us</Option>
          <Option value="lucy">India</Option>
          <Option value="chine">Chine</Option>
          <Option value="south-korea">South korea</Option>
          <Option value="armenia">Armenia</Option>
        </Select>
        </div>
      </div>
      </Drawer>
      </div>
    </div>
  );
};

export default Header;
