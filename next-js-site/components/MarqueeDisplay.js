import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";
import Modal from "@/components/Modal";
import { Button, ButtonRow, ButtonRow2 } from "@/components/Button";
import { useState } from "react";
import { members } from "../components/membersList";

{/* Main Marquee */}

const MarqueeElement = ({ children }) => (
  <span className="text-2xl mx-2 text-ivy-blue font-light">{...children}</span>
);

export default function MarqueeDisplay() {
    return (
      <div className="flex justify-center">
        <div className="overflow-x-hidden w-5/6 md:w-3/3 ">
          <div className="py-3 animate-marquee whitespace-nowrap ">
            <MarqueeElement>Ivy Ready</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Dream it</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Reach it</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Ivy Ready</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Dream it</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Reach it</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Ivy Ready</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Dream it</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Reach it</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Ivy Ready</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Dream it</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Reach it</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Ivy Ready</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Dream it</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Reach it</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Ivy Ready</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Dream it</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Reach it</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Ivy Ready</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Dream it</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Reach it</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Ivy Ready</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Dream it</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Reach it</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
          </div>
      </div>
    </div>  
    )
  }