describe('Тестирование staya', function () {
    
    it('Проверка авторизации и поиск "Мои заказы"', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('kosta.reg@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('Semaki666');
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
         })
})