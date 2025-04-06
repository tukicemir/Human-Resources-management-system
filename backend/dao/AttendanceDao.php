<?php
require_once 'BaseDao.php';

class AttendanceDao extends BaseDao {
    public function __construct() {
        parent::__construct('attendances');
    }

    // Kreiranje prisutnosti
    public function recordAttendance($employeeId, $date, $status) {
        $stmt = $this->connection->prepare("INSERT INTO " . $this->table . " (employee_id, date, status) VALUES (:employee_id, :date, :status)");
        $stmt->bindParam(':employee_id', $employeeId);
        $stmt->bindParam(':date', $date);
        $stmt->bindParam(':status', $status);
        return $stmt->execute();
    }

    // Dobavljanje prisutnosti po ID zaposlenog
    public function getAttendanceByEmployeeId($employeeId) {
        $stmt = $this->connection->prepare("SELECT * FROM " . $this->table . " WHERE employee_id = :employee_id");
        $stmt->bindParam(':employee_id', $employeeId);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    // Ažuriranje prisutnosti
    public function updateAttendance($id, $data) {
        return $this->update($id, $data);
    }

    // Brisanje prisutnosti
    public function deleteAttendance($id) {
        return $this->delete($id);
    }
}
?>
