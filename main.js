let previewData = [];

function adicionarDadosAoPreview() {
    const nome = document.getElementById('nome').value;
    const num_serie = document.getElementById('num_serie').value;
    const ativar = document.getElementById('ativar').value;
    const motivo = document.getElementById('motivo').value;
    const data_inicial = document.getElementById('data_inicial').value;
    const data_final = document.getElementById('data_final').value;

    if (!nome || !num_serie || !ativar || !motivo || !data_inicial || !data_final) {
        Swal.fire({
            title: 'Atenção!',
            text: 'Por favor, preencha todos os campos antes de adicionar.',
            icon: 'warning',
            confirmButtonText: 'OK',
            customClass: {
                popup: 'animated fadeInDown'
            }
        });
        return;
    }

    const newRowData = [nome, num_serie, ativar, motivo, data_inicial, data_final];
    previewData.push(newRowData);

    renderPreviewTable();

    document.getElementById('form-dados').reset();

    Swal.fire({
        title: 'Sucesso!',
        text: 'Dados adicionados à pré-visualização.',
        icon: 'success',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        customClass: {
            popup: 'animated slideInRight'
        }
    });
}

function renderPreviewTable() {
    const tableBody = document.getElementById('previewTableBody');
    tableBody.innerHTML = '';

    previewData.forEach((rowData, index) => {
        const tr = document.createElement('tr');
        tr.style.animation = `slideInUp 0.3s ease-out ${index * 0.05}s forwards`;
        tr.style.opacity = 0;

        rowData.forEach(cellData => {
            const td = document.createElement('td');
            td.textContent = cellData;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`, styleSheet.cssRules.length);


function limparPreview() {
    previewData = [];
    renderPreviewTable();
    Swal.fire({
        title: 'Pré-visualização Limpa!',
        text: 'Todos os dados da pré-visualização foram removidos.',
        icon: 'info',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        customClass: {
            popup: 'animated slideInLeft'
        }
    });
}

function baixarXLSX() {
    if (previewData.length === 0) {
        Swal.fire({
            title: 'Atenção!',
            text: 'Nenhum dado na pré-visualização para exportar! Adicione algum registro primeiro.',
            icon: 'warning',
            confirmButtonText: 'OK',
            customClass: {
                popup: 'animated fadeInDown'
            }
        });
        return;
    }

    const headers = ['Nome Completo', 'Número de Série', 'Ativar', 'Motivo', 'Data Inicial', 'Data Final'];
    const dataForXLSX = [headers, ...previewData];

    const ws = XLSX.utils.aoa_to_sheet(dataForXLSX);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Certificados');
    XLSX.writeFile(wb, 'TemplateSafeID.xlsx');
    
    Swal.fire({
        title: 'Sucesso!',
        text: 'Arquivo XLSX gerado com sucesso!',
        icon: 'success',
        confirmButtonText: 'OK',
        customClass: {
            popup: 'animated bounceIn'
        }
    });

    limparPreview(); 
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;

        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        this.appendChild(ripple);

        ripple.addEventListener('animationend', () => {
            this.removeChild(ripple);
        });
    });
});

document.addEventListener('DOMContentLoaded', renderPreviewTable);

window.adicionarDadosAoPreview = adicionarDadosAoPreview;
window.limparPreview = limparPreview;
window.baixarXLSX = baixarXLSX;
