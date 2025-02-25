function HashMap (size = 100) {
    this.size = size
    this.buckets = Array.from({ length: size }, () => []);
}

HashMap.prototype.hash = function (key) {
    return key.length
}

HashMap.prototype.put = function (key,value) {
    let index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {  // Verifica se a chave já existe
            bucket[i] = [key, value]; // Atualiza o valor
            return;
        }
    }

    // Se a chave não existir, adiciona um novo par [key, value]
    bucket.push([key, value]);
}

HashMap.prototype.get = function (key) {
    let index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
            return bucket[i][1]; // Retorna o valor associado à chave
        }
    }

    return undefined; // Retorna undefined se a chave não for encontrada
};

HashMap.prototype.remove = function (key) {
    let index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
            bucket.splice(i, 1); // Remove o par [key, value]
            return true; // Retorna true indicando que a remoção foi bem-sucedida
        }
    }

    return false; // Retorna false se a chave não for encontrada
};



const hashMap = new HashMap()