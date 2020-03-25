// the export statement means that everything inside the curly braces 
// will be made public when you import this file into another via the import statement

export default {
    props: ['msg'], //this is the object; inside data

    template: `
    <section>
        <p class="new-message" :class="{'my-message' : matchedID}"> 
            <span>{{ msg.message.name }} says: </span>
            {{ msg.message.content }}
        </p>

    </section>
    `,

    data: function() { 
        return { 
            message: "hello from the template",
            matchedID: this.$parent.socketID == this.msg.id //parent is talking about main_vm
        };
    }, 
    methods: {
    }
}