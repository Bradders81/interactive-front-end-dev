describe("Calculator", function () {

    var calc = new Calculator;

    describe("Addition tests", function () {
        it("should return42", function () {
            calc.add(20);
            calc.add(22);
            expect(addition(20, 22)).toBe(42);
        });
        it("should return 26", function () {
            calc.add(7);
            calc.add(19);
            expect(addition(7, 19)).toBe(26);
        });
        it("should return an error we don't supply two numbers", function () {
            spyOn(window, "alert");
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("Error!")
        });
    });
});