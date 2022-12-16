window.onload = () => {
  const d = new Date();
  let year = d.getFullYear();
  const signNode = document.querySelector(".  ");
  signNode.innerHTML = `<span class="">©${year}     . Todos los derechos reservados. </span><br><span class="" style="font-size: 10px;">E-commerce desarrollado por <a href="https://lobocreaciones.com/" target="_blank" style="cursor: pointer; color: inherit; text-decoration: none;" >Lobo Creaciones.</a></span></p>`;
};


      {%- for block in section.blocks -%}
        
         {% if product.tags contains 'ingrediente1' %}       


            <div class="ingrediente">
              <div>
                <img style="max-width: 100px;" {% render 'image-attributes', image: block.settings.image, sizes: '200' %}>
              </div>
              <div class="contenidos">
                <h3>
                  {{ block.settings.title }}
                </h3>
                <p>
                  {{ block.settings.content }}
                </p>
              </div>
            </div>

    
          {% else %}

    
    
         {% endif %}
        
      {% endfor %}