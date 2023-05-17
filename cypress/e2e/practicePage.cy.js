import { Registration } from "../support/Page object/registrationPage.cy";
import 'cypress-file-upload';


describe('Practice Page', () => {
   beforeEach(() => {

       cy.visit('https://deploy-preview-2--stupefied-kare-608721.netlify.app/?utm_source=github&utm_campaign=bot_dp');
   })

   it('Redirect test', () => {
       Registration.NavBarRedirect();
       Registration.SocialLinksRedirect();
   })

   it('NavBarRedirect test', () => {
       Registration.NavBarRedirect();
   })

   it('RegistrationForm test', () => {
       Registration.fullName();
       Registration.gender();
       Registration.checkbox();
       Registration.multiOptionsDropDown();
       Registration.skillsDropdown();
       Registration.selectCountryDropdown();
       Registration.dateOfBirth();
       Registration.submit();
       Registration.refresh();
       Registration.fileUpload();
   })

   it('FileUpload test', () => {
       Registration.fileUpload();
   })
})