<?php
require_once 'BaseDao.php';

class UserDao extends BaseDao {
    public function __construct() {
        parent::__construct('users');
    }

    // Pretraga korisnika po username
    public function getByUsername($username) {
        return $this->getById($username);
    }

    // Registracija novog korisnika
    public function registerUser($username, $password, $role) {
        $stmt = $this->connection->prepare("INSERT INTO " . $this->table . " (username, password, role) VALUES (:username, :password, :role)");
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':password', $password);
        $stmt->bindParam(':role', $role);
        return $stmt->execute();
    }

    // Ažuriranje podataka o korisniku
    public function updateUser($id, $data) {
        return $this->update($id, $data);
    }

    // Brisanje korisnika
    public function deleteUser($id) {
        return $this->delete($id);
    }
}
?>
