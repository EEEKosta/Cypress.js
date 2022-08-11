
describe('Тестирование yandex.ru', function () {

    it('Проверка, что поиск работает корректно', function () {
        cy.visit('https://yandex.ru');
        cy.get('#text').type('котики').type('{enter}');
        cy.contains('Список пород кошек');
    })
})
