
import React from 'react';
import Display from './display.js';

const data = () => {
const data =[
	{"city":"Kolhapur", "state":"Maharashtra"},
	{"city":"Port Blair", "state":"Andaman & Nicobar Islands"},
	{"city":"Adilabad", "state":"Andhra Pradesh"},
	{"city":"Adoni", "state":"Andhra Pradesh"},
	{"city":"Amadalavalasa", "state":"Andhra Pradesh"},
	{"city":"Amalapuram", "state":"Andhra Pradesh"},
	{"city":"Anakapalle", "state":"Andhra Pradesh"},
	{"city":"Anantapur", "state":"Andhra Pradesh"},
	{"city":"Badepalle", "state":"Andhra Pradesh"},
	{"city":"Banganapalle", "state":"Andhra Pradesh"},
	{"city":"Bapatla", "state":"Andhra Pradesh"},
	{"city":"Bellampalle", "state":"Andhra Pradesh"},
	{"city":"Bethamcherla", "state":"Andhra Pradesh"},
	{"city":"Bhadrachalam", "state":"Andhra Pradesh"},
	{"city":"Bhainsa", "state":"Andhra Pradesh"},
	{"city":"Bheemunipatnam", "state":"Andhra Pradesh"},
	{"city":"Bhimavaram", "state":"Andhra Pradesh"},
	{"city":"Bhongir", "state":"Andhra Pradesh"},
	{"city":"Bobbili", "state":"Andhra Pradesh"},
	{"city":"Bodhan", "state":"Andhra Pradesh"},
	{"city":"Chilakaluripet", "state":"Andhra Pradesh"},
	{"city":"Chirala", "state":"Andhra Pradesh"},
	{"city":"Chittoor", "state":"Andhra Pradesh"}
]



  return (
    <div>
       <Display newData={data} />
      
    </div>
  )
}

export default data



