const BlankaTokenContract = artifacts.require("BlankaToken");

contract('BlankaToken', (accounts) => {
    beforeEach (async () => {
        this.BlankaToken = await BlankaTokenContract.new("BlankaToken", "BaToken", "0x71fc860F7D3A592A4a98740e39dB31d25db65ae8", 1*10**18);
    })

    it('returns name', async () => {
        let name = await this.BlankaToken.name.call();

        assert.equal(name, "BlankaToken", 'Contract does not return correct name');
    });
});