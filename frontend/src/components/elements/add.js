import React from "react";
import { useState } from "react";
import { FcPlus } from "react-icons/fc";
import { AiTwotoneNotification } from "react-icons/ai";
import emailjs from "@emailjs/browser";

import "./add.css";

const Add = () => {
    const sendEmail = () => {
        emailjs
            .send("gmail", "template_wwj9pv8", famount, "xClJ7XeWiFD6tSTVi")
            .then(
                (result) => {
                    console.log(result.text);
                    window.alert("Information sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
        setAmount("");
        setFriend("");
        setInputList("");
        setEmail("");
    };
    const [inputList, setInputList] = useState("");
    const [email, setEmail] = useState("");
    const [friend, setFriend] = useState("");
    const [amount, setAmount] = useState("");
    const [famount, setFamount] = useState([{
        name: "",
        email: "",
        amount: "",
        discription: "",
    }, ]);

    const itemEvent = (e) => {
        setInputList(e.target.value);
    };
    const friendEvent = (e) => {
        setFriend(e.target.value);
    };
    const emailEvent = (e) => {
        setEmail(e.target.value);
    };
    const saveTodataset = () => {
        setFamount({
            name: friend,
            email: email,
            amount: amount,
            description: inputList,
        });


        setTimeout(function() {
            postData();
        }, 2000);
        window.alert("Amount added: " + amount + " to friend: " + friend);
    };

    const amountAdd = (e) => {
        setAmount(e.target.value);
    };

    const postData = async() => {
        const { name, email, amount, description } = famount;

        const res = await fetch("/friendAdd", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                amount: amount,
                description: description,
            }),
        });

        const val = await res.json();

        if (res.status === 422 || !val) {
            window.alert("Failed at server side");
        } else {}
    };

    return ( <
        >
        <
        div className = "mainHead" >
        <
        div className = "mainHead2" >
        <
        label className = "place" > Manage Expenses < /label> <br / >
        <
        div >
        <
        h3 className = "addFriends" > Add friends < /h3> <br / >
        <
        div className = "expenditure" >
        <
        input className = "addInputField"
        type = "email"
        placeholder = "Email "
        value = { email }
        onChange = { emailEvent }
        /> <
        input className = "addInputField"
        type = "text"
        placeholder = "Name "
        value = { friend }
        onChange = { friendEvent }
        />{" "} <
        br / >
        <
        input className = "addInputField"
        type = "text"
        placeholder = "Add description"
        value = { inputList }
        onChange = { itemEvent }
        />{" "} <
        input className = "addInputField"
        placeholder = "amount"
        type = "text"
        value = { amount }
        name = "amount"
        onChange = { amountAdd }
        />{" "} <
        button className = "btn pad"
        onClick = { saveTodataset } >
        <
        FcPlus size = "30px" / >
        <
        /button>{" "} <
        br / >
        <
        button className = "btn pad"
        onClick = { sendEmail } >
        <
        AiTwotoneNotification size = "30px" / >
        Notify them!!
        <
        /button>{" "} < /
        div > { " " } <
        /div>{" "} < /
        div > { " " } <
        /div>{" "} < /
        >
    );
};
export default Add;