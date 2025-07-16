<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $filename = "TemplateSafeID.xlsx";
    if (file_exists($filename)) {
        header('Content-Description: File Transfer');
        header('Content-Type: text/xlsx');
        header('Content-Disposition: attachment; filename="' . basename($filename) . '"');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($filename));
        flush();
        readfile($filename);
        unlink($filename); 
        exit;
    } else {
        echo "<script>
          Swal.fire({
            title: 'Atenção!', // 
            text: 'Nenhum dado para exportar! Adicione algum registro primeiro.',
            icon: 'warning', // Ícones: 'warning', 'error', 'success', 'info'
            confirmButtonText: 'OK'
          });
        </script>";
    }
}
?>
