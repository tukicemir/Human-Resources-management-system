<?php
require_once 'BaseDao.php';

class LeaveDao extends BaseDao {
    public function __construct() {
        parent::__construct('leaves');
    }

    // Kreiranje novog zahteva za odmor
    public function createLeaveRequest($employeeId, $startDate, $endDate, $reason, $status) {
        $stmt = $this->connection->prepare("INSERT INTO " . $this->table . " (employee_id, start_date, end_date, reason, status) VALUES (:employee_id, :start_date, :end_date, :reason, :status)");
        $stmt->bindParam(':employee_id', $employeeId);
        $stmt->bindParam(':start_date', $startDate);
        $stmt->bindParam(':end_date', $endDate);
        $stmt->bindParam(':reason', $reason);
        $stmt->bindParam(':status', $status);
        return $stmt->execute();
    }

    // Dobavljanje svih zahteva za odmor
    public function getAllLeaves() {
        return $this->getAll();
    }

    // Dobavljanje zahteva za odmor po ID
    public function getLeaveById($id) {
        return $this->getById($id);
    }

    // Ažuriranje zahteva za odmor
    public function updateLeaveRequest($id, $data) {
        return $this->update($id, $data);
    }

    // Brisanje zahteva za odmor
    public function deleteLeaveRequest($id) {
        return $this->delete($id);
    }
}
?>
