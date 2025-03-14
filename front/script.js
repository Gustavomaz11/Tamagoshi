const vm = new Vue({
  el: '#app',
  data: {
    inicio: false,
    totalVida: 100.0,
    totalSono: 100.0,
    totalFome: 100.0,
    dormindo: false,
    idade: 1,
    nomeTamagoshi: '',
  },

  methods: {

    iniciarJogo() {
      this.inicio = !this.inicio
      this.perderVida()
      this.ficarComSono()
      this.ficarComFome()
      this.envelhecer()
    },

    envelhecer() {
      setInterval(() => {
        const idade_atual = this.idade
        this.idade++
        if(idade_atual < this.idade) alert('Você envelheceu 1 ano!')
      }, 60000)
    },

    perderVida() {
      setInterval(() => {
        if(this.dormindo) {
          this.totalVida -= 0.1
        } else {
          this.totalVida -= 0.5
        }
      }, 3000)
    },

    ficarComSono() {
      setInterval(() => {
        if(!this.dormindo) {
          this.totalSono -= 0.3
        }
      }, 3000)
    },

    ficarComFome() {
      setInterval(() => {

        if(this.fome == 0.0) {
          alert('Morreu')
          return
        }

        if(this.dormindo) {

          if(this.totalFome <= 50.0) {
            this.totalFome -= 1.88
            this.totalVida -= 1.89
          } else {
            this.totalFome -= 0.70
          }

        } else {

          if(this.totalFome <= 50.0) {
            this.totalFome -= 1.88
            this.totalVida -= 3.0
          } else {
            this.totalFome -= 1.75
          }
        }
      }, 3000)
    },

    alimentar() {
      const valor = 15
      if(this.totalFome + valor > 100.0) {
        this.totalFome = 100.0
      } else {
        this.totalFome += valor
      }
    },

    dormir() {
      this.dormindo = !this.dormindo
    }
  },
  watch: {
    dormindo(novoValor) {
      if(novoValor) {
        this.totalSono = 100.0
        alert('Dormindo')
      } else {
        alert('Acordei')
      }
    }
  }
})