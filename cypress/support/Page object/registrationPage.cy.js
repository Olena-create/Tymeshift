export class registration {

    NavBarRedirect() {
        cy.get('.navbar-brand > img').click();
        cy.url().should('be.equal', 'https://deploy-preview-2--stupefied-kare-608721.netlify.app/index.html');

        cy.get('.nav > :nth-child(1) > a').click();
        cy.url().should('be.equal', 'https://deploy-preview-2--stupefied-kare-608721.netlify.app/index.html');

        cy.get('.active > a').click();
        cy.url().should('be.equal', 'https://deploy-preview-2--stupefied-kare-608721.netlify.app/index.html');

        cy.get('.nav > :nth-child(6) > a').click();
        cy.origin('https://en.wikipedia.org/wiki/Interaction', () => {
            cy.url().should('be.equal', 'https://en.wikipedia.org/wiki/Interaction');
            cy.go('back');
        })

        cy.get(':nth-child(7) > .dropdown-toggle').trigger('mouseover').click();
        cy.get('.dropdown-menu > :nth-child(1) > a').click();
        cy.origin('www.youtube.com/', () => {
            cy.url().should('be.equal', 'https://www.youtube.com/');
            cy.go('back');
        })

        cy.get(':nth-child(7) > .dropdown-toggle').trigger('mouseover').click();
        cy.get('.dropdown-menu > :nth-child(2) > a').click();
        cy.origin('https://vimeo.com/', () => {
            cy.url().should('be.equal', 'https://vimeo.com/');
            cy.go('back');
        })

        cy.get('.nav > :nth-child(8) > a').should('have.attr', 'href', 'http://tymeshift.com/');
        cy.go('back');
    }

    SocialLinksRedirect() {
        cy.get('.facebook')
            .invoke('removeAttr', 'target').click();
        cy.origin('https://www.facebook.com/automationtesting2016/', () => {
            cy.url().should('be.equal', 'https://www.facebook.com/automationtesting2016/');
            cy.go('back');
        })

        cy.get('.twitter')
            .invoke('removeAttr', 'target').click();
        cy.origin('https://twitter.com/krishnasakinala', () => {
            cy.url().should('be.equal', 'https://twitter.com/krishnasakinala');
            cy.go('back');
        })

        cy.get('.linkedin')
            .invoke('removeAttr', 'target').click();
        cy.origin('https://www.linkedin.com', () => {
            cy.url().should('be.equal', 'https://www.linkedin.com/nhome/?trk=hb_signin');
            cy.go('back');
        })

        cy.get('.google-plus')
            .invoke('removeAttr', 'target').click();
        cy.origin('accounts.google.com', () => {
            cy.url().should('include', 'google.com/');
            cy.go('back');
        })

        cy.get('.youtube')
            .invoke('removeAttr', 'target').click();
        cy.origin('https://consent.youtube.com', () => {
            cy.url().should('include', 'youtube');
            cy.go('back');
        })
    }

    fullName() {
        cy.get(':nth-child(1) > :nth-child(2) > .form-control')
            .type('Olena')
            .should('have.value', 'Olena');
        cy.get(':nth-child(1) > :nth-child(3) > .form-control')
            .type('Kolesnyk')
            .should('have.value', 'Kolesnyk');
    }

    gender() {
        cy.get(':nth-child(1) > .ng-pristine').should("be.visible");
        cy.get('.col-md-4 > :nth-child(2) > .ng-pristine').should("be.visible");
        cy.get(':nth-child(1) > .ng-pristine').check().should("be.checked");
        cy.get('.col-md-4 > :nth-child(2) > .ng-pristine').should("not.be.checked");
    }

    checkbox() {
        cy.get('#checkbox1').check().should("be.checked");
        cy.get('#checkbox2').check().should("be.checked");
        cy.get('#checkbox3').check().should("be.checked");
    }

    multiOptionsDropDown() {
        cy.get(':nth-child(7) > .col-md-4').click();
        cy.get('.ui-autocomplete > :nth-child(1)').click();
        cy.get('.ui-autocomplete > :nth-child(2)').click();
        cy.get('.ui-autocomplete > :nth-child(3)').click();
        cy.get('#msdd > :nth-child(1)').contains('Arabic');
        cy.get('#msdd > :nth-child(2)').contains('Bulgarian');
        cy.get('#msdd > :nth-child(3)').contains('Catalan');
        cy.get('body').click();
    }

    skillsDropdown() {
        cy.get('#Skills')
            .select('CSS')
            .should('have.value', 'CSS');
        cy.get('#Skills')
            .select('C')
            .should('not.have.value', 'CSS');
    }

    selectCountryDropdown() {
        cy.get('.select2-selection').click();
        cy.get('.select2-search__field').type('Japan').type('{enter}');
        cy.get('.select2-selection')
            .should('have.text', 'Japan')
    }

    dateOfBirth() {
        cy.get('#yearbox')
            .select('1981')
            .should('have.value', '1981');
        cy.get(':nth-child(11) > :nth-child(3) > .form-control')
            .select('May')
            .should('have.value', 'May');
        cy.get('#daybox')
            .select('6')
            .should('have.value', '6');
    }

    submit() {
        cy.get('#basicBootstrapForm').invoke('submit', (e) => {
            e.preventDefault();
            throw new Error('submitting!!!');
        })

        cy.get('#basicBootstrapForm').within(() => {
            cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('Olena');
            cy.get('#submitbtn').click();
        })
    }

    refresh() {
        cy.get('#yearbox')
            .select('1981')
            .should('have.value', '1981');
        cy.get('#Button1').click();
        cy.get('#yearbox').should('have.value', '');
    }

    fileUpload() {
        cy.get('#imagesrc').attachFile('test1.pdf');
    };
}

export const Registration = new registration();