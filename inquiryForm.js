import { LightningElement, track } from 'lwc';

import createRecordApex from '@salesforce/apex/InquiryFormController.createRecordApex';
export default class InquiryForm extends LightningElement {
@track accName;
@track accIndustry;
@track conName;
@track conEmail;
@track conTitle;
@track conMobile;
@track conStreet;
@track conCity;
@track conState;
@track conZip;
@track conCountry;
@track oppName;
@track oppStage;
@track oppCloseDate;
// get oppName(){
// return `${this.accName} - ${this.conName} - ${new Date().toISOString().split('T')[0]}`;
// }

handleAccountNameChange(event){
this.accName = event.target.value;
}
handleAccountIndustryChange(event){
this.accIndustry = event.target.value;
}
handleContactNameChange(event){
this.conName = event.target.value;
}
handleContactEmailChange(event){
this.conEmail = event.target.value;
}
handleContactTitleChange(event){
this.conTitle = event.target.value;
}
handleContactMobileChange(event){
this.conMobile = event.target.value;
}
handleContactStreetChange(event){
this.conStreet = event.target.value;
}
handleContactCityChange(event){
this.conCity =  event.target.value;
}
handleContactStateChange(event){
this.conState = event.target.value;
}
handleContactZipChange(event){
this.conZip = event.target.value;
}
handleContactCountryChange(event){
this.conCountry = event.target.value;
}
handleOppStageChange(event){
this.oppStage = event.target.value;
}
handleOppCloseDateChange(event){
  this.oppCloseDate = event.target.value;
  
}

handleSubmit(){
const formattedDate = this.formatDate(this.oppCloseDate);
const oppName = `${this.accName} - ${this.conName} - ${formattedDate}`;
createRecordApex({
  accName: this.accName,
  accIndustry: this.accIndustry,
  conName: this.conName,
  conEmail: this.conEmail,
  conTitle: this.conTitle,
  conMobile: this.conMobile,
  conStreet: this.conStreet,
  conCity: this.conCity,
  conState: this.conState,
  conZip: this.conZip,
  conCountry: this.conCountry,
  oppName: oppName,
  oppStage: this.oppStage,
  oppCloseDate: formattedDate
  
  })
  .then(result =>{
    console.log("result:" +JSON.stringify(result))
    this.clearForm();
  })
  .catch(error =>{
    console.error("error:" +JSON.stringify(error))
  });
  }
 

  handleCancel(){
  this.clearForm();
  }
clearForm(){
  this.accName = '';
  this.accIndustry = '';
  this.conName = '';
  this.conEmail = '';
  this.conTitle = '';
  this.conMobile = '';
  this.conStreet = '';
  this.conCity = '';
  this.conState = '';
  this.conZip = '';
  this.conCountry = '';
  this.oppName = '';
  this.oppStage = '';
  this.oppCloseDate = '';
}
  

  formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = `${(date.getMonth() + 1 + '').padStart(2, '0')}`;
  const day = `${(date.getDate() + '').padStart(2, '0')}`;
  return `${year}-${month}-${day}`;
}
}



