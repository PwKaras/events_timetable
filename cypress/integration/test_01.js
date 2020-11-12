import { cy } from "date-fns/locale";

describe('test visit site', function () {
    it('Visit Events Timetable app', function () { cy.visit('http://localhost:3000/events')
    cy.contains('type')
    })
})