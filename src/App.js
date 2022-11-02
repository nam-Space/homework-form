import React, { useState } from "react";
import "./App.css";
import FormRegister from "./components/Form";
import {Routes, Route, Navigate} from 'react-router-dom'

export default function App() {
	return (
		<Routes>
			<Route path="/" element= {<Navigate to='/homework-form'/>}/>
			<Route path="/homework-form" element={<FormRegister />}/>
		</Routes>
	);
}