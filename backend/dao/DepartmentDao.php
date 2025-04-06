<?php
require_once 'BaseDao.php';

class DepartmentDao extends BaseDao {
    public function __construct() {
        parent::__construct('departments');
    }

    // Kreiranje novog odjeljenja
    public function addDepartment($name) {
        $stmt = $this->connection->prepare("INSERT INTO " . $this->table . " (name) VALUES (:name)");
        $stmt->bindParam(':name', $name);
        return $stmt->execute();
    }

    // Dobavljanje svih odjeljenja
    public function getAllDepartments() {
        return $this->getAll();
    }

    // Dobavljanje odjeljenja po ID
    public function getDepartmentById($id) {
        return $this->getById($id);
    }

    // Ažuriranje odjeljenja
    public function updateDepartment($id, $name) {
        $data = ['name' => $name];
        return $this->update($id, $data);
    }

    // Brisanje odjeljenja
    public function deleteDepartment($id) {
        return $this->delete($id);
    }
}
?>
