let Main = {
    data: {
        'São Paulo' : {
            nome: 'São Paulo',
            cidades: [
                'São paulo',
                'São Bernardo',
                'Santo André'
            ]
        },
        'Rio de Janeiro' : {
            nome: 'Rio de Janeiro',
            cidades: [
                'Rio de Janeiro',
                'Niterói',
                'Valença'
            ]
        }
    },

    init: function() {
        this.cacheSelectors();
        this.bindEvents();

        this.$estadoSelect.innerHTML = this.getEstados();
        this.$cidadeSelect.innerHTML = this.getCidades('None');
    },

    cacheSelectors: function() {
        this.$form = document.querySelector("#form");
        this.$estadoSelect = document.querySelector("#estado");
        this.$cidadeSelect = document.querySelector("#cidade");
    },

    bindEvents: function() {
        const self = this;

        this.$form.onsubmit = self.Events.form_submit.bind(this);
        this.$estadoSelect.onchange = self.Events.estadoSelect_change.bind(this);
    },

    getEstados: function() {
        let s = `<option value="None">Selecione um estado</option>`;
        for (let estado in this.data) {
            s+= `<option value="${estado}" id="${estado}">${estado}</option>`
        }

        return s;
    },

    getCidades: function(estado) {
        let s = `<option value="None">Selecione uma cidade</option>`;
        if(estado === 'None') {
            return s;
        }

        estado.cidades.forEach(cidade => {
            s+= `<option value="${cidade}">${cidade}</option>`
        });
        return s;
    },

    Events: {
        estadoSelect_change: function() {
            const nome = this.$estadoSelect.value;
            const estado = this.data[nome];
            const cidades = this.getCidades(estado);

            this.$cidadeSelect.innerHTML = cidades;
        },

        form_submit: function(e) {
            let success = true;

            const selEstado = this.$estadoSelect.value;
            const selCidade = this.$cidadeSelect.value;

            if(selEstado === 'None') {
                this.$estadoSelect.classList.add('red-select');
                // estado_error.innerHTML = 'Selecione o estado';
                success = false;
            }else {
                this.$estadoSelect.classList.remove('red-select');
                // estado_error.innerHTML = '';
                success = true;
            }
            if(selCidade === 'None') {
                this.$cidadeSelect.classList.add('red-select');
                // cidade_error.innerHTML = 'Selecione a cidade';
                success = false;
            }else {
                this.$cidadeSelect.classList.remove('red-select');
                // cidade_error.innerHTML = '';
                success = true;
            }

            if(!success) {
                e.preventDefault();
            }
        }
    }

}

Main.init();