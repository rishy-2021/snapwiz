"use client";
import {
  Button,
  Dropdown,
  DropdownProps,
  MenuProps,
  Select,
  Space,
} from "antd";
import Link from "next/link";
import { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

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

const items: MenuProps["items"] = [
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
    label: <Link href={"/student-headshots"}>Student Headshots</Link>,
  },
  {
    key: "6",
    label: <Link href={"/salesperson-hadshots"}>Salesperson Headshots</Link>,
  },
  {
    key: "7",
    label: (
      <Link href={"/real-estate-agent-headshots"}>
        Real Estate Agent Headshots
      </Link>
    ),
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

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

  return (
    <div className="sticky top-0 w-full flex flex-row justify-around items-center py-3 border-b border-slate-300">
      <p className="text-center text-xl font-semibold w-1/4">Logo.ai</p>
      <div className="flex w-1/3 items-center justify-around">
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
              Hover me
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
      <div className="flex items-center justify-center w-1/4">
        <Select
          style={{ width: "auto" }}
          onChange={handleChange}
          size="small"
          variant="filled"
          defaultValue={"India"}
          popupMatchSelectWidth={false}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <p className="text-lg font-semibold mx-3">Login</p>
        <Button
          shape="round"
          size="middle"
          color="black"
          className="bg-black text-white font-semibold"
        >
          Get started
        </Button>
      </div>
    </div>
  );
};

export default Header;
