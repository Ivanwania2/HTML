// Para fechar a janela flutuante
document.getElementById('close').addEventListener('click', function() {
    document.getElementById('dialog').style.display = 'none';
});

// Exibe a janela flutuante assim que a página carrega
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dialog').style.display='block';
});
