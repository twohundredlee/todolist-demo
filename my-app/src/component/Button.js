import React,{useState} from 'react';

export default function Button(props) {
    const {text=''} = props;
    return <button>{text}</button>
}