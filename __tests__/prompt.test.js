test('creates an employee object', () => {
    const employee = new Employee('James', 'Lindsey');

    expect(employee.firstName).toBe('James');
    expect(employee.lastName).toBe('Lindsey');
})