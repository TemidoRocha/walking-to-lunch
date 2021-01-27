export default {
  methods: {
    async downloadHike(url) {
      try {
        const pdf = await this.axios.get(`/api/downloadPdf/${url}`, {
          responseType: 'arraybuffer',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/pdf',
          },
        });
        var fileURL = window.URL.createObjectURL(new Blob([pdf.data]), { type: 'application/pdf' });
        var fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', `${url}.pdf`);
        document.body.appendChild(fileLink);
        fileLink.click();
        // window.open(fileURL, '_blank');
        URL.revokeObjectURL(fileLink.href);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
