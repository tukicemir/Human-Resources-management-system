<?php
require_once 'BaseDao.php';

class SalaryDao extends BaseDao {
    public function __construct() {
        parent::__construct('salaries');
    }

    // Dobavljanje plata po zaposlenom
    public function getByEmployeeId($employeeId) {
        $stmt = $this->connection->prepare("SELECT * FROM " . $this->table . " WHERE employee_id = :employee_id");
        $stmt->bindParam(':employee_id', $employeeId);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    // Dodavanje nove plate
    public function addSalary($employeeId, $salary, $payDate) {
        $stmt = $this->connection->prepare("INSERT INTO " . $this->table . " (employee_id, salary, pay_date) VALUES (:employee_id, :salary, :pay_date)");
        $stmt->bindParam(':employee_id', $employeeId);
        $stmt->bindParam(':salary', $salary);
        $stmt->bindParam(':pay_date', $payDate);
        return $stmt->execute();
    }

    // Dobavljanje plate po ID
    public function getSalaryById($id) {
        return $this->getById($id);
    }

    // Ažuriranje plate
    public function updateSalary($id, $data) {
        return $this->update($id, $data);
    }

    // Brisanje plate
    public function deleteSalary($id) {
        return $this->delete($id);
    }
}
?>
