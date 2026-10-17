// @ts-check
import { defineConfig,  envField } from 'astro/config';
import node from '@astrojs/node';


// https://astro.build/config
export default defineConfig({

    //se corre  un  servidor  para  genera  las  paginas  dinamicamente
    output:"server",
    adapter: node({
        mode: 'standalone'
    }),
    env: {
        schema:{
            //habilita  la  lectura   de  API URL y hace  que  sea  apublica
            API_URL:envField.string({ context: "server", access: "public" }) 
        }
    },
});
