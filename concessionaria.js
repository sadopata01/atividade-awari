class Carro {
    constructor(placa, ano, cor, modelo, quilometragem, valorDiario, observacao) {
        this.placa = placa;
        this.ano = ano;
        this.cor = cor; 
        this.modelo = modelo; 
        this.quilometragem = quilometragem; 
        this.valorDiario = valorDiario;
        this.observacao = observacao;
    }
}

class Esportivo extends Carro {
    constructor(placa, ano, cor, modelo, quilometragem, valorDiario, observacao, tmp100km) {
        super(placa, ano, cor, modelo, quilometragem, valorDiario, observacao);
        this.tmp100km = tmp100km;
        this.melhorias = [];
    }

    addMelhoria(melhoria) {
        this.melhorias.push(melhoria);
    }
}

class Utilitario extends Carro {
    constructor(placa, ano, cor, modelo, quilometragem, valorDiario, observacao, qtPassageiro, tmBagageiro, kmLitro) {
        super(placa, ano, cor, modelo, quilometragem, valorDiario, observacao);
        this.qtPassageiro = qtPassageiro;
        this.tmBagageiro = tmBagageiro;
        this.kmLitro = kmLitro;
    }
} 

class Reserva {
    constructor(cliente, codigo, status, dtInicio, dtFim) {
        this.cliente = cliente;
        this.codigo = codigo;
        this.status = status;
        this.dtInicio = dtInicio;
        this.dtFim = dtFim;
        this.carro = carro;
    }

    definirStatusInativa() {
        this.status = "Inativa";
    }

    getStatus() {
        return this.status;
    }

    getCliente() {
        return this.cliente;
    }
}

class Pessoa {
    constructor(nome, cpf, idade, endereço, telefone){
    this.nome = nome
    this.cpf = cpf
    this.idade = idade
    this.endereço = endereço
    this.telefone = telefone
    
    }
}

class Funcionario extends Pessoa {
    constructor(nome, cpf, idade, endereço, telefone, salario, qtAlugueis, status){
        super(nome, cpf, idade, endereço, telefone)
        this.salario = salario
        this.qtAlugueis = qtAlugueis
        this.status = status
    } 
}

class Cliente extends Pessoa {
    constructor(nome, cpf, idade, endereço, telefone, ftCarteira, dtNascimento, nuCarteira, endereço, email) {
       super(nome, cpf, idade, endereço, telefone)
       this.dtNascimento = dtNascimento
       this.nuCarteira = nuCarteira
       this.ftCarteira = ftCarteira
       this.email = email
    }

    getCPF() {
        return this.getCPF;
    }
}

class Promocao {
    constructor(email, titulo, descricao, dtValidade){
        this.email = email
        this.descricao = descricao
        this.dtValidade = dtValidade
    }
    enviarEmail(email) {
        console.log(`E-mail enviado para ${email}`);
    }
}

class Localiza {
    constructor(promocao) {
        this.carros = [];
        this.clientes = [];
        this.funcionarios = [];
        this.reservas = [];
        this.promocao = promocao;
    }

    enviarPromoca() {
        this.clientes.forEach(cliente => {
            this.promocao.enviarEmail(cliente.getEmail());
        })
    }

    solicitarRervar(cliente) {
        if(verificarCliente(cliente)) {
            console.log("Solicitação da reserva aprovada!");
        } else {
            console.log("Solicitação da reserva repovada!");
        }
    }

    verificarCliente(cliente) {
        this.reservas.forEach(reserva => {
            if(reserva.getStatus() == 'Ativa' & reserva.getCliente().getCPF() == cliente.getCPF()) {
                return false;
            }
        });
        return true;
    }

    verificarCarrosDiponiveis() {
        this.reservas
    }

}