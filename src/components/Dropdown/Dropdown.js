import React, { useState, useRef, useEffect } from 'react';
import Flag from 'react-flagkit';
import { IconContext } from 'react-icons';
import { AiOutlineCaretDown } from 'react-icons/ai';
import DropdownList from '../DropdownList/DropdownList';
import { CurrencyDropdown, DropdownContainer } from './DropdownStyles';
import { Text } from '../../globalStyles';

const Dropdown = ({ currency, setCurrency }) => {
	const ref = useRef();
	const listRef = useRef();
	const [show, setShow] = useState(false);

	const closeDropdown = (el,index) => {
		console.log(el);
		setCurrency([...currency ,{id:currency[currency.length-1].id+1,value:el.cur}] );
		//setShow(false);
		console.log(currency)
	};

	useEffect(() => {
		const handleMouseClick = (e) => {
			if (show && !listRef?.current?.contains(e.target)) {
				setShow(false);
			}
		};

		window.addEventListener('click', handleMouseClick);

		return () => {
			window.removeEventListener('click', handleMouseClick);
		};
	}, [show, ref]);

	useEffect(() => {
		if (show && window.innerWidth <= 960) {
			document.body.style.overflowY = 'hidden';
			return;
		}
		document.body.style.overflowY = 'scroll';
	}, [show]);

	return (
		<DropdownContainer>
			<CurrencyDropdown ref={ref} onClick={() => setShow(true)}>
				<Flag size={32} country={currency[0].value.slice(0, -1)} />
				<Text color="#f4f4f4">{
					currency.map((ele)=>{
						return <>
						{
							ele.value 
						}
						<button 
						onclick={()=>{
						  let data =  currency.filter((el)=>{
							return el.id != ele.id
						   })
						   setCurrency(data)
						}}>× </button> 
						</>
					})
				}</Text>
				<IconContext.Provider value={{ size: '1.3em', color: '#dfdfdf' }}>
					<AiOutlineCaretDown />
				</IconContext.Provider>
			</CurrencyDropdown>
			<DropdownList
				listRef={listRef}
				setCurrency={setCurrency}
				show={show}
				closeDropdown={closeDropdown}
			/>
		</DropdownContainer>
	);
};

export default Dropdown;
