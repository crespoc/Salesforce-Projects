import { LightningElement } from 'lwc';

export default class ConvertCurrency extends LightningElement {
    showOutput = false;
    convertedValue = "";
    toCurrency = "";
    fromCurrency = "";
    enteredamount = "";
    currencyOptions = [];

    connectedCallback(){
        this.fetchSymbols();
    }

    changeHandler(event){
        let {name, value} = event.target;
        if(name === 'amount') this.enteredamount = value;
        if(name === 'fromcurr') this.fromCurrency = value;
        if(name === 'tocurr') this.toCurrency = value;
    }

    clickHandler() {
        this.conversion()
    }

    async fetchSymbols() {
        let endpoint = 'https://api.frankfurter.app/currencies';
        try{
            let response = await fetch(endpoint);
            if(!response.ok){
                throw new Error('Network response was not OK');
            }
            const data = await response.json()
            let options = [];
            for(let symbol in data){
                options = [...options, {label:symbol,value:symbol}]
            } 

            this.currencyOptions = [...options];
        }catch(error){
            console.log(error);
        }
    }

    async conversion(){
        
       let endpoint = `https://api.frankfurter.app/latest?amount=${this.enteredamount}&from=${this.fromCurrency}&to=${this.toCurrency}`;

       try{
        let response = await fetch(endpoint);
        if(!response.ok){
            throw new Error('Network response was not OK');
        }
        const data = await response.json()
        this.convertedValue = data.rates[this.toCurrency];
        this.showOutput = true;
        }catch(error){
        console.log(error);
        }

    }
}

