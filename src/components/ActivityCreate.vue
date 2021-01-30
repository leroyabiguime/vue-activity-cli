<template>
     <div class="actvivityCreateForm">
            <a v-if="!isFormDisplayed"  @click="toggleFormDisplay" class="button is-primary is-block is-alt is-large" href="#" >New Activity</a>
            <div v-if="isFormDisplayed" class="create-form">
                <h2>Create Activity</h2> 
                    <form>
                        <div class="field">
                            <label for="label">Title</label>   
                            <div class="control">
                                <input v-model="newActivity.title" type="text" class="input" placeholder="Read a Book">
                            </div>
                        </div>
                        <div class="field">
                            <label for="notes">Notes</label>
                            <div class="control">
                                <textarea v-model="newActivity.note" class="textarea" placeholder="Write some note" id="note"></textarea>
                            </div>
                        </div>
                        <div class="field">
                            <label for="notes">Category</label>
                            <div class="control">
                            <select v-model="newActivity.category" class="select" >
                                <option disabled value="">Please Select One</option>
                                <option  v-for="category in categories" :key="category.id"> {{category.text}} </option>
                            </select>
                            </div>
                        </div>
                        <div class="field is-grouped">
                            <div class="control">
                                <button :disabled="!isFormValid"  @click.prevent="createActivity" class="button is-link">Create Activity</button>
                            </div>
                            <div class="control">
                                <button class="button is-link" @click="toggleFormDisplay">Cancel</button>
                            </div>
                        </div>
                    </form>
            </div>
                   </div>
</template>
<style>

</style>
<script>
import { createActivityAPI } from '@/api'
export default {
    props : {
        categories : {
            type: Object,
            required: true
        }
    },
    data () {
        return {
              isFormDisplayed: false,
               newActivity: {
                  title: '',
                  note: '',
                  category: '',
              },
        }
    },
    computed : {
         isFormValid () {
            return this.newActivity.title 
            && this.newActivity.note 
            && this.newActivity.category
          },
    },
    methods: {
         toggleFormDisplay (){
              this.isFormDisplayed=!this.isFormDisplayed;
          },
          resetActivity () {
               this.newActivity.title= ''
                 this.newActivity.note = ''
                 this.newActivity.category = ''
              
          },
         createActivity(){
             createActivityAPI({...this.newActivity})
             .then(activity => {
                this.resetActivity()
                   this.isFormDisplayed = false
                  this.$emit('activityCreate', {...activity})
             })
            
          },
    },
    
}
</script>