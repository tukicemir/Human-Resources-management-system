<?php
require_once 'BaseDao.php';

class EmployeeDao extends BaseDao {
    public function __construct() {
        parent::__construct('employees');
    }

    // Dodavanje novog zaposlenog
    public function addEmployee($firstName, $lastName, $email, $phone, $departmentId) {
        $stmt = $this->connection->prepare("INSERT INTO " . $this->table . " (first_name, last_name, email, phone, department_id) VALUES (:first_name, :last_name, :email, :phone, :department_id)");
        $stmt->bindParam(':first_name', $firstName);
        $stmt->bindParam(':last_name', $lastName);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':phone', $phone);
        $stmt->bindParam(':department_id', $departmentId);
        return $stmt->execute();
    }

    // Dobavljanje svih zaposlenih
    public function getAllEmployees() {
        return $this->getAll();
    }

    // Pretraga zaposlenih po ID
    public function getEmployeeById($id) {
        return $this->getById($id);
    }

    // Ažuriranje podataka o zaposlenom
    public function updateEmployee($id, $data) {
        return $this->update($id, $data);
    }

    // Brisanje zaposlenog
    public function deleteEmployee($id) {
        return $this->delete($id);
    }
}
?>
