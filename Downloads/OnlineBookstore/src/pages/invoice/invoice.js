import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './invoice.css';

export default function Invoice(props) {

    var invoiceBlock = JSON.parse(localStorage.getItem("invoiceBlock"));
    var CartDetails = JSON.parse(localStorage.getItem("CartBox"));
    console.log(CartDetails);

    function displayDetailsNone(stringDetail, detail){
        if (detail.length !== 0){
            return stringDetail + detail;
        }
        else{
            return "";
        }
    }

    const [name, setName] = useState(displayDetailsNone("Full Name: ", invoiceBlock[0]));
    const [company, setCompany] = useState(displayDetailsNone("Company: ", invoiceBlock[1]));
    const [address1, setAddress1] = useState(displayDetailsNone("Address Line 1: ", invoiceBlock[2]));
    const [address2, setAddress2] = useState(displayDetailsNone("Address Line 2: ", invoiceBlock[3]));
    const [city, setCity] = useState(displayDetailsNone("City: ", invoiceBlock[4]));
    const [region, setRegion] = useState(displayDetailsNone("Region/State/District: ", invoiceBlock[5]));
    const [country, setCountry] = useState(displayDetailsNone("Country: ", invoiceBlock[6]));
    const [postcode, setPostcode] = useState(displayDetailsNone("Postcode/Zip Code: ", invoiceBlock[7]));

    function displayNone(quantity, bookname){
        if (Number(quantity)){
            return quantity + " X " + bookname;
        }
        else{
            return "";
        }
    }

    function displayPriceNone(price){
        if (Number(price)){
            return "Total Price: HK$ " + price;
        }
        else{
            return "";
        }
    }

    const[listOrder0, setListOrder0] = useState(displayNone(CartDetails[0][1], CartDetails[0][0]))
    const[listOrder1, setListOrder1] = useState(displayNone(CartDetails[1][1], CartDetails[1][0]))
    const[listOrder2, setListOrder2] = useState(displayNone(CartDetails[2][1], CartDetails[2][0]))
    const[listOrder3, setListOrder3] = useState(displayNone(CartDetails[3][1], CartDetails[3][0]))
    const[listOrder4, setListOrder4] = useState(displayNone(CartDetails[4][1], CartDetails[4][0]))
    const[listOrder5, setListOrder5] = useState(displayNone(CartDetails[5][1], CartDetails[5][0]))
    const[listOrder6, setListOrder6] = useState(displayNone(CartDetails[6][1], CartDetails[6][0]))
    const[listOrder7, setListOrder7] = useState(displayNone(CartDetails[7][1], CartDetails[7][0]))
    const[listOrder8, setListOrder8] = useState(displayNone(CartDetails[8][1], CartDetails[8][0]))
    const[listOrder9, setListOrder9] = useState(displayNone(CartDetails[9][1], CartDetails[9][0]))
    const[listOrder10, setListOrder10] = useState(displayNone(CartDetails[10][1], CartDetails[10][0]))
    const[listOrder11, setListOrder11] = useState(displayNone(CartDetails[11][1], CartDetails[11][0]))
    const[totalPrice, setTotalPrice] = useState(
        displayPriceNone(
            CartDetails[0][1]*CartDetails[0][2]+
            CartDetails[1][1]*CartDetails[1][2]+
            CartDetails[2][1]*CartDetails[2][2]+
            CartDetails[3][1]*CartDetails[3][2]+
            CartDetails[4][1]*CartDetails[4][2]+
            CartDetails[5][1]*CartDetails[5][2]+
            CartDetails[6][1]*CartDetails[6][2]+
            CartDetails[7][1]*CartDetails[7][2]+
            CartDetails[8][1]*CartDetails[8][2]+
            CartDetails[9][1]*CartDetails[9][2]+
            CartDetails[10][1]*CartDetails[10][2]+
            CartDetails[11][1]*CartDetails[11][2]
            )
    )

    return(
        <div id = "myInvoice">
            <div id = "titleInvoice">Invoice Page</div>
            <div id = "detailInvoice">
                <div id = "textInvoice"></div>
                <div id = "name">{name}</div>
                <div id = "company">{company}</div>
                <div id = "address1">{address1}</div>
                <div id = "address2">{address2}</div>
                <div id = "city">{city}</div>
                <div id = "region">{region}</div>
                <div id = "country">{country}</div>
                <div id = "postcode">{postcode}</div>
            </div>
            <div id = "orderInvoice">
                <div id = "listOrder0">
                    <div id = "listInfo0" >{listOrder0}</div>
                    <div id = "listPrice0"></div>
                </div>
                <div id = "listOrder1">
                    <div id = "listInfo1">{listOrder1}</div>
                    <div id = "listPrice1"></div>
                </div>
                <div id = "listOrder2">
                    <div id = "listInfo2">{listOrder2}</div>
                    <div id = "listPrice2"></div>
                </div>
                <div id = "listOrder3">
                    <div id = "listInfo3">{listOrder3}</div>
                    <div id = "listPrice3"></div>
                </div>
                <div id = "listOrder4">
                    <div id = "listInfo4">{listOrder4}</div>
                    <div id = "listPrice4"></div>
                </div>
                <div id = "listOrder5">
                    <div id = "listInfo5">{listOrder5}</div>
                    <div id = "listPrice5"></div>
                </div>
                <div id = "listOrder6">
                    <div id = "listInfo6">{listOrder6}</div>
                    <div id = "listPrice6"></div>
                </div>
                <div id = "listOrder7">
                    <div id = "listInfo7">{listOrder7}</div>
                    <div id = "listPrice7"></div>
                </div>
                <div id = "listOrder8">
                    <div id = "listInfo8">{listOrder8}</div>
                    <div id = "listPrice8"></div>
                </div>
                <div id = "listOrder9">
                    <div id = "listInfo9">{listOrder9}</div>
                    <div id = "listPrice9"></div>
                </div>
                <div id = "listOrder10">
                    <div id = "listInfo10">{listOrder10}</div>
                    <div id = "listPrice10"></div>
                </div>
                <div id = "listOrder11">
                    <div id = "listInfo11">{listOrder11}</div>
                    <div id = "listPrice11"></div>
                </div>
                <div id = "totalPriceOrder">{totalPrice}</div>
            </div>
            <div id = "endMessage">Thanks for ordering. Your books will be delivered within 7 working days.</div>
            <Link to = "/">
                <button id = "okButton">Ok</button>
            </Link>
        </div>
    );
}


