async function listaVideos() {
  const conexao = await fetch('http://localhost:3000/videos')
  const conexaoConvertida = await conexao.json()

  return conexaoConvertida
}

async function criaVideo(titulo, descricao, url, imagem) {
  // Por padrão vem GET, então alteramos para POST
  const conexao = await fetch('http://localhost:3000/videos', {
    method: 'POST',
    headers: {
      // Serve para especificar que tipo de arquivo está sendo enviado ou recebido
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visualizações`,
      url: url,
      imagem: imagem
    })
  })

  const conexaoConvertida = await conexao.json()

  return conexaoConvertida
}

export const conectaApi = {
  listaVideos,
  criaVideo
}
